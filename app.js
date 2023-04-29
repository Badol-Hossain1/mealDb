const loadData = async (e) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`;
  const data = await fetch(url);
  const res = await data.json();
  foodData(res.meals);
};

const foodData = (data) => {
  // console.log(data);
  const display = document.getElementById("display");
  display.innerText = "";
  data.forEach((meals) => {
    // console.log(meals.idMeal);
    const div = document.createElement("div");

    div.classList.add("col");
    div.innerHTML = `
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      style="background-image: url('${meals.strMealThumb}')"
      title="Woman holding a mug"
    ></div>
    <div
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
      
        <div class="text-gray-900 font-bold text-xl mb-2">
          ${meals.strMeal}
        </div>
        <p id="more" class="text-gray-700 line-clamp-3	 text-base">
       ${meals.strInstructions}
        </p>
        <a onclick='loadMoreData(${meals.idMeal})' href="#my-modal-2" class="btn">Details</a>
    </br>
      
      </div>
      <div class="flex items-center">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src="/img/main.jpg"
          alt="Avatar of Jonathan Reinink"
        />
        <div class="text-sm">
          <p class="text-gray-900 leading-none">Jonathan Reinink</p>
          <p class="text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
  </div>
    
    `;

    display.appendChild(div);
  });
};

const loadMoreData = async (e) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`;

  console.log(url);
  const data = await fetch(url);
  const res = await data.json();

  moreDataDispaly(res.meals[0]);
};
const moreDataDispaly = (el) => {
  console.log(el);
  const body = (document.getElementById("body").innerText = el.strInstructions);

  const data = (document.getElementById("title").innerText = el.strMeal);
  const img = (document.getElementById(
    "imgs",
  ).innerHTML = ` <img id="imgs" src='${el.strMealThumb}' alt="">`);
  const div = document.createElement("div");
  div.classList.add("col");
};

const searchMeal = () => {
  const input = document.getElementById("input").value;
  console.log(input);
  loadData(input);
};
loadData("fish");
