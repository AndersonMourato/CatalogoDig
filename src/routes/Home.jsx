
import Footer from "../components/Footer";

const Home = ()=>{
    return(

        <div className="container align-items-center">
            <div className="box-content">
                <div className="row">
                    <div className="col">
                        <h1>Catalogo Digital Auto</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit mi, consectetur maximus finibus ornare, egestas vel libero. Mauris ut ante sed libero efficitur condimentum. <br/><br/>Aenean at porta leo, eu egestas justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris et eros urna. Phasellus placerat ultricies ligula id feugiat. Donec fringilla nec diam nec vehicula. Maecenas fermentum tempus efficitur. Cras aliquam turpis ac cursus malesuada. Cras lacinia dui sapien, eu fringilla est facilisis at. Phasellus eu quam ipsum. Mauris suscipit malesuada ligula, eu commodo ex feugiat sit amet.
                        </p>
                    </div>

                    <div className="col">
                        <img className="img-home" src="https://blog.digitalmanager.guru/wp-content/uploads/2023/06/e729113a-05ae-6e47-92bd-a8ba88bf6bff.webp"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;