import '../styles/Welcome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import bg from '../image/Back-of-the-bus-website-4-750x421.png'

function Welcome(){
    return (
      <>
        <div className="flex">
          <div className="w-4/12 mt-24 pl-8">
            <h2>
              {" "}
              Le site web est un site pour trouver facilement des repères sur
              les bus existants à Madagascar .
            </h2>
            <p className="my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              turpis magna, efficitur eget posuere non, interdum quis quam.{" "}
            </p>
            <button className="items-center bg-red-800 rounded-md text-white py-3 w-full my-8">
              {" "}
              Visiter maintenant
            </button>
          </div>
          <img src={bg} className="w-8/12 opacity-70 bg-center" />
        </div>
        <div className="flex"></div>
      </>
    );

}

export default Welcome