import { useEffect, useState } from 'react';
import menuIcon from '../../assets/icon-menu.svg';
import style from './Menu.module.css';

function Menu() {
	const [menu, setMenu] = useState(false);
	useEffect(() => {
		console.log(menu);
	}, [menu]);
	return (
		<form className={style.menu}>
			<label htmlFor="menu">
				<img src={menuIcon} alt="Menu Button" />
			</label>
			<input
				type="checkbox"
				name="menu"
				id="menu"
				onChange={() => {
					setMenu((menu) => !menu);
				}}
			/>
		</form>
	);
}

export default Menu;
