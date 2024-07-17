import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import {PhoneNumbers} from './components/PhoneNumbers'
import {Status} from './components/Status'
import {Heading} from "./components/Heading";
import {Oscar} from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import {LoggedIn} from "./components/state/LoggedIn";
import {User} from "./components/state/User";
import {Counter} from "./components/state/Counter";
import React from "react";
import {ThemeContextProvider} from "./components/context/ThemeContext";
import {Box} from "./components/context/Box";


function App() {
	const person = {
		'first_name': 'No',
		'second_name': 'Name'
	}
	const personList = [
		{
			'first_name': 'No',
			'second_name': 'Name'
		},
		{
			'first_name': 'Yes',
			'second_name': 'Name'
		},
		{
			'first_name': 'Maybe',
			'second_name': 'Name'
		},
	]

	const phoneNumbers = [
		{
			name: "Daniyar",
			number: 87073677607
		},
		{
			name: "Danik",
			number: 99999
		}
	]
	return (
		<div className="App">
			<Greet name="Daniyar" messageCount={19} isLoggedIn={true}/>
			<Person person={person}/>
			<h1>-------------------------</h1>
			<h3>New things</h3>
			<h1>-------------------------</h1>
			<PersonList persons={personList}/>
			<PhoneNumbers numbers={phoneNumbers}/>
			<Status status={'error'}/>
			<Heading>text</Heading>
			<Oscar>
				<Heading>
					Leonardo
				</Heading>
			</Oscar>
			<Button handleClick={(id) => {
				console.log('Button clicked', id)
			}}/>
			<Input value='dd' handleChange={(value = 'string') => {
				console.log("text ", value)
			}}/>
			<LoggedIn/>
			<h2>-----------------------------------------</h2>
			<User/>
			<Counter/>
			<h2>-----------------------------------------</h2>
			<ThemeContextProvider>
				<Box/>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
