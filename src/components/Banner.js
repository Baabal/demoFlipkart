import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'
import { bannerData } from '../data/data.js';


const useStyle = makeStyles(theme => ({
        image: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }
}))

const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel 
            autoPlay={true} 
            animation="slide" 
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            StylesProvider
            navButtonsProps={{ 
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 3,
                    margin: 0,
                    width: 40,
                }
            }}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image} alt="" />
                ))
            }
        </Carousel>
    )
}

export default Banner;