import { useState, useEffect } from 'react';

const App = () => {
	const [value, setValue] = useState('');
	const [message, setMessage] = useState(null);

	const getMessages = async () => {
		const options = {
			method: 'POST',
			body: JSON.stringify({
				message: value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const response = await fetch(
				'http://localhost:8000/completions',
				options
			);
			const data = await response.json();
			setMessage(data.choices[0].message);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='app'>
			<section className='side-bar'>
				<button>+ New Chat</button>
				<ul className='history'>
					<li>BLAH</li>
				</ul>
				<nav>
					<p>Made by Ana</p>
				</nav>
			</section>
			<section className='main'>
				<h1>AnaGPT</h1>
				<ul className='feed'></ul>
				<div className='bottom-section'>
					<div className='input-container'>
						<input
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<div
							id='submit'
							onClick={getMessages}>
							➤
						</div>
					</div>
					<p className='info'>
						ChatGPT can make mistakes. Check important
						info.
					</p>
				</div>
			</section>
		</div>
	);
};

export default App;
