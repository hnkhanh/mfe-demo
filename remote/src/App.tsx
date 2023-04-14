import { useState } from "react";
import reactLogo from "./img/react.svg";
// import viteLogo from "vite.svg";
import Button from "./Button";
import Data from './data.json';
function App() {
//   const [bit] = useState(0);

  return (
		<div className='container'>
			<div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
				{Data.populars.map(item => (
					<div className='col col-sm-6 col-md-4'>
						<div className='card mb-4 rounded-3 shadow-sm'>
							<div className='card-header py-3'>
								<img
									src={item.image}
									className='card-img-top'
									alt='categories'
									style={{ width: ' 100%', height: ' 250px' }}
								/>
							</div>
							<div className='card-body'>
								<h5 className='card-title'>{item.name}</h5>
								<p className='card-text'>{item.description}</p>
							</div>
							<div className='card-footer'>
								<a
									asp-action='GetDishesbyCategory'
									asp-route-category='@category.Name'
									className='btn btn-dark'>
									Take a look
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
		// <div className='App border-red'>
		// 	<div>
		// 		<a href='https://vitejs.dev' target='_blank'>
		// 			{/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
		// 			asdsadsa
		// 		</a>
		// 		<a href='https://reactjs.org' target='_blank'>
		// 			<img src={reactLogo} className='logo react' alt='React logo' />
		// 		</a>
		// 	</div>
		// 	<h1 className='text-success'> Remote About from 5003</h1>
		// 	{bit}
		// 	<Button></Button>
		// </div>
	);
}

export default App;
