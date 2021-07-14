import React, { useState, useEffect, FormEvent } from 'react';
import { Paginated } from '@feathersjs/feathers';
import client from './feathers';

interface Patient {
    // add the required properties here
    firstName: string,
    lastName: string,
    email: string,
    country: string,
    province: string,
    postal: string,
    lowBloodPress: number,
    highBloodPress: number,
    id: number
};

type PatientFunction = (g: Patient) => void;

interface AllPatientFuntions {
    addPatient: PatientFunction,
    removePatient: PatientFunction
};

let patientFuncs: AllPatientFuntions = {
    addPatient: (c: Patient) => { },
    removePatient: (c: Patient) => { }
};

const patientsService = client.service('patients');

patientsService.on('created', (newPatient: Patient) => {
    patientFuncs.addPatient(newPatient);
});

patientsService.on('removed', (oldPatient: Patient) => {
    patientFuncs.removePatient(oldPatient);
});

function Patients() {
    // you'll have to add some additional state varialbes here
    // for each of the form fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [province, setProvince] = useState("");
    const [postal, setPostal] = useState("");
    const [lowBloodPress, setLowBloodPress] = useState(0);
    const [highBloodPress, setHighBloodPress] = useState(0);
    const [allPatients, setAllPatients] = useState<Array<Patient>>([]);
    const [errorMessage, setErrorMessage] = useState("Forms are required");
    const [errorClass, setErrorClass] = useState("form-control");

    const handleDelete = (id: number) => {
        patientsService.remove(id);
    }

    const patientRows = allPatients.map((patient: Patient) =>
        <tr key={patient.id}>
            <td>{patient.id}</td>
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.email}</td>
            <td>{patient.country}</td>
            <td>{patient.province}</td>
            <td>{patient.postal}</td>
            <td>{patient.lowBloodPress}</td>
            <td>{patient.highBloodPress}</td>
            {/* you'll have to define the additional columns here */}
            <td><button onClick={() => handleDelete(patient.id)} type="button" className="btn btn-danger">Delete</button></td>
        </tr>
    );

    useEffect(() => {
        function addPatientX(newPatient: Patient) {
            setAllPatients([...allPatients, newPatient]);
        }

        function removePatientX(oldPatient: Patient) {
            const newPatients = allPatients.filter((ipatient, index, arr) => {
                return ipatient.id !== oldPatient.id;
            });
            setAllPatients(newPatients);
        }

        patientFuncs.addPatient = addPatientX;
        patientFuncs.removePatient = removePatientX;
    });

    useEffect(() => {
        patientsService
            .find()
            .then((patientPage: Paginated<Patient>) => setAllPatients(patientPage.data))
            .catch((err: any) => {
                console.log("problem finding patients.");
            });
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const element = e.currentTarget as HTMLFormElement;
        if (element.checkValidity()) {
            element.classList.remove('was-validated');
            patientsService
                .create({ firstName, lastName, email, country, province, postal, lowBloodPress, highBloodPress })
                .then((patient: Patient) => {
                    // successfully created patient
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setCountry("");
                    setProvince("");
                    setPostal("");
                    setLowBloodPress(0);
                    setHighBloodPress(0);
                    setErrorMessage("Forms are required");
                    setErrorClass("form-control");
                })
                .catch((err: any) => {
                    // failed to create patient
                    setErrorMessage(err.message);
                    setErrorClass("form-control is-invalid");
                });
        } else {
            element.classList.add('was-validated');
        }
    }

    if (country === "Canada") {
        return (
            <div>
                <div className="py-5 text-center">
                    <h2>Patients</h2>
                </div>

                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="row">
                                {/* you'll have to add additional form fields here */}
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" className="form-control" id="firstName" maxLength={50}
                                        value={firstName} required onChange={e => setFirstName(e.target.value)} />
                                    <div className="invalid-feedback">
                                        First name is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" maxLength={50}
                                        value={lastName} required onChange={e => setLastName(e.target.value)} />
                                    <div className="invalid-feedback">
                                        Last name is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" maxLength={50}
                                        value={email} required onChange={e => setEmail(e.target.value)} />
                                    <div className="invalid-feedback">
                                        Email is required.
                                    </div>
                                </div>
                                <div className="form-group col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="country">Country</label>
                                    <select className="custom-select form-control" id="country" value={country} required onChange={e => setCountry(e.target.value)}>
                                        <option value="">Select country</option>
                                        <option value="Canada">Canada</option>
                                        <option value="USA">USA</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Country is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="province">Province</label>
                                    <select className="custom-select form-control" id="province" value={province} required onChange={e => setProvince(e.target.value)}>
                                        <option value="">Select province</option>
                                        <option value="British Columbia">British Columbia</option>
                                        <option value="Alberta">Alberta</option>
                                        <option value="Saskatchewan">Saskatchewan</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Province is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="postal">Postal code</label>
                                    <input type="text" className="form-control" id="postal" pattern="[A-Za-z][0-9][A-Za-z]\ ?[0-9][A-Za-z][0-9]"
                                        value={postal} required onChange={e => setPostal(e.target.value)} />
                                    <div className="invalid-feedback">
                                        Postal code is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="lowBloodPress">Lowest systolic blood pressure in last year</label>
                                    <input type="number" className="form-control" id="lowBloodPress"
                                        value={lowBloodPress} required onChange={e => setLowBloodPress(parseInt(e.target.value))} />
                                    <div className="invalid-feedback">
                                        Lowest systolic blood pressure in last year is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="highBloodPress">Highest systolic blood pressure in last year</label>
                                    <input type="number" className="form-control" id="highBloodPress"
                                        value={highBloodPress} required onChange={e => setHighBloodPress(parseInt(e.target.value))} />
                                    <div className="invalid-feedback">
                                        Highest systolic blood pressure in last year is required.
                                </div>
                                </div>
                            </div>
                            <div className={errorClass}>
                                {errorMessage}
                            </div>
                            <br></br>
                            <button className="btn btn-primary btn-lg btn-block" type="submit">Add patient</button>
                        </form>
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Email address</th>
                            <th scope="col">Country</th>
                            <th scope="col">Province/state</th>
                            <th scope="col">Postal/zip code</th>
                            <th scope="col">Lowest systolic blood pressure in last year</th>
                            <th scope="col">Highest systolic blood pressure in last year</th>
                            {/* you'll have to add additional columns here */}
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {patientRows}

                    </tbody>
                </table>

            </div>
        );
    }
    else {
        return (
            <div>
                <div className="py-5 text-center">
                    <h2>Patients</h2>
                </div>

                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="row">
                                {/* you'll have to add additional form fields here */}
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" className="form-control" id="firstName" maxLength={50}
                                        value={firstName} required onChange={e => setFirstName(e.target.value)} />
                                    <div className="invalid-feedback">
                                        First name is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" maxLength={50}
                                        value={lastName} required onChange={e => setLastName(e.target.value)} />
                                    <div className="invalid-feedback">
                                        Last name is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" maxLength={50}
                                        value={email} required onChange={e => setEmail(e.target.value)} />
                                    <div className="invalid-feedback">
                                        Email is required.
                                    </div>
                                </div>
                                <div className="form-group col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="country">Country</label>
                                    <select className="custom-select form-control" id="country" value={country} required onChange={e => setCountry(e.target.value)}>
                                        <option value="">Select country</option>
                                        <option value="Canada">Canada</option>
                                        <option value="USA">USA</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Country is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="province">State</label>
                                    <select className="custom-select form-control" id="province" value={province} required onChange={e => setProvince(e.target.value)}>
                                        <option value="">Select state</option>
                                        <option value="Washington">Washington</option>
                                        <option value="Oregon">Oregon</option>
                                        <option value="California">California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        State is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="postal">Zip code</label>
                                    <input type="text" className="form-control" id="postal" pattern="(\d{5}([\-]\d{4})?)"
                                        value={postal} required onChange={e => setPostal(e.target.value)} />
                                    <div className="invalid-feedback">
                                        Zip code is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="lowBloodPress">Lowest systolic blood pressure in last year</label>
                                    <input type="number" className="form-control" id="lowBloodPress"
                                        value={lowBloodPress} required onChange={e => setLowBloodPress(parseInt(e.target.value))} />
                                    <div className="invalid-feedback">
                                        Lowest systolic blood pressure in last year is required.
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label htmlFor="highBloodPress">Highest systolic blood pressure in last year</label>
                                    <input type="number" className="form-control" id="highBloodPress"
                                        value={highBloodPress} required onChange={e => setHighBloodPress(parseInt(e.target.value))} />
                                    <div className="invalid-feedback">
                                        Highest systolic blood pressure in last year is required.
                                </div>
                                </div>
                            </div>
                            <div className={errorClass}>
                                {errorMessage}
                            </div>
                            <br></br>
                            <button className="btn btn-primary btn-lg btn-block" type="submit">Add patient</button>
                        </form>
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Email address</th>
                            <th scope="col">Country</th>
                            <th scope="col">Province/state</th>
                            <th scope="col">Postal/zip code</th>
                            <th scope="col">Lowest systolic blood pressure in last year</th>
                            <th scope="col">Highest systolic blood pressure in last year</th>
                            {/* you'll have to add additional columns here */}
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {patientRows}

                    </tbody>
                </table>

            </div>
        );
    }
}

export default Patients;
