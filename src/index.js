import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/style.css';

class FormHandler extends React.Component {
    constructor(props) {
        super(props);

        // state initialization
        this.state = {
            name: '',
            email: '',
            gender: 'Man'
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleNameChange(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                name: event.target.value
            };
        });
    }

    handleEmailChange(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                email: event.target.value
            };
        });
    }

    handleGenderChange(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                gender: event.target.value
            };
        });
    }

    handleSubmitForm(event) {
        // stop default action from submit (no-refresh)
        event.preventDefault();

        // custom alert based on bootstrap
        const alertPlaceHolder = document.getElementById('result');
        const alert = (name, email, gender) => {
            alertPlaceHolder.innerHTML = [
                `<div class="alert alert-success alert-dismissible pb-0" role="alert">
                    <p class="pb-0">Name : ${name}</p>
                    <p class="pb-0">Email : ${email}</p>
                    <p class="pb-0">Gender : ${gender}</p>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            ];
        };

        alert(this.state.name, this.state.email, this.state.gender);
    }

    render() {
        return (
            <div className='container my-5'>
                <div className='row justify-content-center'>
                    <div id='result' className="col-lg-6 px-0"></div>
                </div>
                <div className='row justify-content-center'>
                    <div className="col-lg-6 border rounded p-4">
                        <h2 className='fw-bold mb-3'>Register Form</h2>
                        <form onSubmit={this.handleSubmitForm}>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'>Name</label>
                                <input type='text' className='form-control' name='name' id='name' value={this.state.name} onChange={this.handleNameChange} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <input type='email' className='form-control' name='email' id='email' value={this.state.email} onChange={this.handleEmailChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='gender' className='form-label' id='gender'>Gender</label>
                                <select className='form-select' name='gender' id='gender' value={this.state.gender} onChange={this.handleGenderChange}>
                                    <option value='Man'>Man</option>
                                    <option value='Woman'>Woman</option>
                                </select>
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<FormHandler />);