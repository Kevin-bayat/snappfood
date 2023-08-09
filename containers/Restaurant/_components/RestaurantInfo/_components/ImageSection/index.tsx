import Image from 'next/image';
import classes from './index.module.scss';
const ImageSection = ({ backgroundImage, title, logo }) => {
    return (
        <div className={classes.container}>
            <Image src={backgroundImage} alt={title} width={565} height={134} className={classes.container__mainImage} />
            <div className={classes.container__mainLogo}>
                <Image src={logo} alt={title} width={50} height={50} className={classes.container__logo} />
            </div>
        </div>
    );
};
export default ImageSection;
