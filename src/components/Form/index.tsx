// styles
import './Form.css';

// hooks
import { useState } from 'react';

// components
import InputField from '../InputField';
// import DropdownList from '../DropdownList';
import Button from '../Button';

const Form = (props: any) => {
    // states
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // sending professional data to App.js state
        props.registeredProfessionals({
            name,
            job,
            image,
            team
        });
        setName('');
        setJob('');
        setImage('');
        setTeam('');
    };

    return (
        <section className='formulario'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar os cards</h2>
                <InputField
                    label='Nome da carta'
                    placeholder='Digite seu nome'
                    required={true}
                    value={name}
                    changed={(value: any) => {setName(value)}}
                />
                <InputField
                    label='Tipo'
                    placeholder='Digite seu cargo'
                    required={true}
                    value={job}
                    changed={(value: any) => {setJob(value)}}
                />
                <InputField
                    label='Imagem'
                    placeholder='Informe o endereço url da imagem'
                    value={image}
                    changed={(value: any) => {setImage(value)}}
                />
                {/* <DropdownList
                    label='Facção'
                    items={props.teamNames}
                    value={team}
                    changed={value => setTeam(value)}
                /> */}
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
};

export default Form;