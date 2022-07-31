import React from 'react';
import autoBind from 'auto-bind';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/style.css';

class FormHandler extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        // state initialization
        this.state = {
            formValues: [{
                name: '',
                email: '',
                status: 'Siswa'
            }]
        };
    }

    handleChange(index, e) {
        let formValues = this.state.formValues;
        formValues[index][e.target.name] = e.target.value;
        this.setState({ formValues });
    }

    addFormFields() {
        this.setState(({
            formValues: [...this.state.formValues, {
                name: '', email: '', status: 'siswa'
            }]
        }))
    }

    removeFormFields(i) {
        let formValues = this.state.formValues;
        formValues.splice(i, 1);
        this.setState({ formValues });
    }

    handleSubmitForm(event) {
        // stop default action from submit (no-refresh)
        event.preventDefault();

        // custom alert based on bootstrap
        let values = this.state.formValues;
        const alertPlaceHolder = document.getElementById('result');

        values.forEach(value => {
            alertPlaceHolder.innerHTML +=
                `<div class="alert alert-success alert-dismissible pb-0" role="alert">
                    <p class="pb-0">Name : ${value.name}</p>
                    <p class="pb-0">Email : ${value.email}</p>
                    <p class="pb-0">Status : ${value.status}</p>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
        });
    }

    render() {
        return (
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div id="result" className="col-lg-6 px-0"></div>
                </div>
                <h2 className="fw-bold mb-4 text-center">Register Form</h2>
                <form onSubmit={this.handleSubmitForm}>
                    {this.state.formValues.map((element, index) => (
                        <div className="row justify-content-center mb-3" key={index}>
                            <div className="col-lg-6 border rounded p-4">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" id="name" value={element.name} onChange={e => this.handleChange(index, e)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" id="email" value={element.email} onChange={e => this.handleChange(index, e)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label" id="status">Status</label>
                                    <select className="form-select" name="status" id="status" value={element.status} onChange={e => this.handleChange(index, e)} required>
                                        <option value="Siswa">Siswa</option>
                                        <option value="Mahasiswa">Mahasiswa</option>
                                        <option value="Pekerja">Pekerja</option>
                                    </select>
                                </div>
                                {
                                    index ?
                                        <button type="button" className="btn btn-danger float-end" onClick={() => this.removeFormFields(index)}>Hapus</button>
                                        : null
                                }
                            </div>
                        </div>
                    ))}
                    <div className="row justify-content-center">
                        <div className="col-lg-6 px-0">
                            <button type="submit" className="btn btn-primary w-100 mb-2">Submit</button>
                            <button type="button" className="btn btn-secondary w-100" onClick={() => this.addFormFields()}>+ Tambah Data</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<FormHandler />);