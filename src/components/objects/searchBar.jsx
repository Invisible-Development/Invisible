import algoliasearch from 'algoliasearch'

const client = algoliasearch("3MWYHR8H3A", "1e034d932116419ca771ec54bd615551");

const searchClient = client.initIndex('Invisible');


function SearchBar() {

   return (
      <input 
         autoFocus
         className="w-5/6 h-9 mt-7 ml-7 inline pl-1 outline-none bg-transparent text-slate-50 border-b-[4px] border-cyan-600 font-secondary" 
         placeholder="Type to search..." 
         tabIndex="0" 
         onKeyDown={() => {
            var input = document.getElementById('input');
            var hit1 = document.getElementById('hit1text');
            var hit1desc = document.getElementById('hit1description');
            var hit2 = document.getElementById('hit2text');
            var hit2desc = document.getElementById('hit2description');
            var hit3 = document.getElementById('hit3text');
            var hit3desc = document.getElementById('hit3description');

            var hidden = document.getElementById('hidden');
            searchClient.search(input.value)
            .then(({ hits }) => {
               hidden.classList.remove('hidden-animation')
               hidden.classList.add('shown-animation');
               if (hits[0]) {
                  hit1.innerHTML = hits[0]["page_name"]
                  hit1.setAttribute("href", hits[0]["href"])
                  hit1desc.innerHTML = hits[0]["description"]
                  hit1desc.setAttribute("href", hits[0]["href"])
               } else {
                  hit1.innerHTML = "No results" 
                  hit1desc.innerHTML = "No description"
                  hit1.setAttribute("href", "/")
                  hit1desc.setAttribute("href", "/")
               }
               
               if (hits[1]) {
                  hit2.innerHTML = hits[1]["page_name"]
                  hit2.setAttribute("href", hits[1]["href"])
                  hit2desc.innerHTML = hits[1]["description"]
                  hit2desc.setAttribute("href", hits[1]["href"])
               } else {
                  hit2.innerHTML = "No secondary results"
                  hit2desc.innerHTML = "No description"
                  hit2.setAttribute("href", "/")
                  hit2desc.setAttribute("href", "/")
               }
               if (hits[2]) {
                  hit3.innerHTML = hits[2]["page_name"]
                  hit3.setAttribute("href", hits[2]["href"])
                  hit3desc.innerHTML = hits[2]["description"]
                  hit3desc.setAttribute("href", hits[2]["href"])
               } else {
                  hit3.innerHTML = "No secondary results"
                  hit3desc.innerHTML = "No description"
                  hit3.setAttribute("href", "/")
                  hit3desc.setAttribute("href", "/")
               }
               })
            } 
         }
         id="input">
      </input>

   )
}

export default SearchBar;