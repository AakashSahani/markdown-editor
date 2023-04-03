import menuIcon from '../../assets/icon-menu.svg';
import style from './Menu.module.css';
import { MenuProps } from '../../interfaces/interface';

function Menu({ menu, setMenu }: MenuProps) {
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
					setMenu((menu: Boolean) => !menu);
				}}
			/>
		</form>
	);
}

export default Menu;
