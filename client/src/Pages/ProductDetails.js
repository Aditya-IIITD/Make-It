import { useParams } from "react-router-dom";
import { useOrderValue } from "../Contexts/OrderContext";
import { Circles } from "react-loader-spinner";
import style from "../Styles/Home.module.css";
function ProductDetails() {
  const { Products } = useOrderValue();
  const { item, id } = useParams();
  const product = Products[item]?.find((i) => i.id === id);

  if (product) {
    return (
      <div className="poppins">
        <header className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-[35px] ">{product.name}</p>
            <p className="font-medium text-gray-500">{product.subcategory}</p>
            <p className="mt-10 text-2xl">Rs. {product.price}</p>
          </div>
          <div className="">
            <img
              src={product.image}
              className="w-[700px]"
              style={{ maxHeight: "500px" }}
            />
          </div>
        </header>
        <section>
          <div className="w-10/12 mx-auto mt-10">
            <p className="font-semibold text-lg flex gap-2 items-center mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9862/9862064.png"
                className="w-[40px]"
              />
              Ingredients:
            </p>
            <ul className="ml-16 gap-16 list-disc">
              {Object.keys(product.ingredients).map((i, key) => (
                <li>
                  <p className="font-semibold">{i}</p>

                  {product.ingredients[i].map((ing, index) => (
                    <p className="text-sm flex gap-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
                        className="w-[30px]"
                      />
                      {ing}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-10/12 mx-auto my-12">
            <p className="font-semibold text-lg flex gap-2 items-center mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1041/1041373.png"
                className="w-[40px]"
              />
              Steps:
            </p>
            <ul className="ml-16 gap-16 list-disc">
              {Object.keys(product.steps).map((i, key) => (
                <li>
                  <p className="font-semibold">{i}</p>

                  {product.steps[i].map((ing, index) => (
                    <p className="text-sm flex gap-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
                        className="w-[30px]"
                      />
                      {ing}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          {/* checkouts */}
          <div className="w-4/12 mx-auto px-10 py-2 rounded-xl bg-gray-200 ">
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
              />
              <label for="default-checkbox" class="ms-2 text-sm font-medium ">
                Salad
              </label>
            </div>

            <div class="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
              />
              <label for="checked-checkbox" class="ms-2 text-sm font-medium  ">
                Cutlery
              </label>
            </div>
          </div>
        </section>
        <div className="flex justify-center my-10 ">
          <button className="bg-custom-color text-white px-6 py-3 rounded-xl shadow-xl font-semibold hover:scale-[1.05] border hover:border-purple-900 ease-in duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.spinnerDiv}>
        <Circles color="#6e62e1" />
      </div>
    );
  }
}

export default ProductDetails;
