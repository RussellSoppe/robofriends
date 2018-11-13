import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
	return (
		<div>
			{robots.map((user, i) => {
					return (
						<Card 
						key={i} 
						id={user.id} 
						name={user.name} 
						email={user.email} 
						/>
					);
				}
			)}
		</div>
	);
}

export default Cardlist;

// const Cardlist = ({ robots }) => {
// 	return (
// 		<div>
// 			{robots.map((user, i) => {
// 				return (
// 				<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
// 					<img src={`https://robohash.org/${robots[i].id}?200x200`} alt='robots'/>
// 						<div>
// 							<h2>{robots[i].name}</h2>
// 							<p>{robots[i].email}</p>
// 						</div>
// 				</div> 
// 				);
// 			}
// 		)}
// 		</div>
// 	);
// }

// export default Cardlist;