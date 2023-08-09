import classes from './index.module.scss';
import LinkButton from '../../components/UI/LinkButton';

const Home = () => {
    return (
        <div className={classes.container}>
            <div className={classes.container__card}>
                <div>برای دیدن لیست رستوران‌های باز کلیک کنید</div>
                <LinkButton>کلیک کنید</LinkButton>
            </div>
        </div>
    );
};
export default Home;
