const App = () => {
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
						<input />
						<div id='submit'>➤</div>
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
