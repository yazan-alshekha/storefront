import Categories from './Categories';
import CurrentCategory from './CurrentCategory';
import Products from './Products';
import SimpleCart from '../cart/SimpleCart';


export default function MainComponent() {
    return (
        <main>
            <Categories />
            <CurrentCategory />
            <Products />
            <SimpleCart/>
        </main>
    );
}