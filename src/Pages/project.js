import Layout from "../Layout/layout";
import Carousel, {CarouselItems} from "../Components/Carousel";


export default function Projects() {
    return(
        <Layout>
            <Carousel>
                <CarouselItems>Item 1</CarouselItems>
                <CarouselItems>Item 2</CarouselItems>
                <CarouselItems>Item 3</CarouselItems>
                <CarouselItems>Item 4</CarouselItems>
            </Carousel>
            
        </Layout>
    )
}