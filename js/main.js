fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        localStorage.setItem('list1', JSON.stringify(json));
        function createItem(object) {
            const item = document.createElement('div');
            item.classList.add('box');
            const anchor = document.createElement('a');
            anchor.setAttribute('href', './pag.html?id=' + object.id)
            item.appendChild(anchor);
            const img = document.createElement('img');
            img.setAttribute('src', object.logo);
            img.setAttribute('alt', object.company);
            anchor.appendChild(img);
            const time1 = document.createElement('p');
            time1.textContent = object.postedAt + ' • ' + object.contract;
            anchor.appendChild(time1);
            const time2 = document.createElement('p');
            const post = document.createElement('h3');
            post.textContent = object.position;
            anchor.appendChild(post);
            const company = document.createElement('p');
            company.textContent = object.company;
            anchor.appendChild(company);
            const location = document.createElement('h4');
            location.textContent = object.location;
            anchor.appendChild(location);
            return item;

        }
        function populate(countItem, lista) {
            const content = document.getElementById('content');
            for (let i = 0; i < countItem; i++) {
                const item1 = createItem(lista[i]);
                content.appendChild(item1);
            }
        }
        function clean() {
            const content = document.getElementById('content');
            content.textContent = '';
        }
        populate(6, json);
        let contor = 0;
        const footerButton = document.getElementById('footerButton');
        footerButton.addEventListener('click', () => {

            contor++;

            if (contor === 1) {
                clean();
                populate(json.length - 3, json);
            }
            else if (contor === 2) {
                clean();
                populate(json.length, json);
            }








        })



        const headerButton = document.getElementById('headerButton');
        headerButton.addEventListener('click', () => {
            const inputSearch = document.getElementById('search');
            const inputLocation = document.getElementById('inputLocation');
            const filter = json.filter((obj) => {
                return obj.position.toLowerCase().includes(inputSearch.value.toLowerCase()) && obj.location.toLowerCase().includes(inputLocation.value.toLowerCase());
            });


            clean();
            populate(filter.length, filter);
            const navCheck = document.getElementById('navCheck');
            if (navCheck.checked && inputSearch.value === '' && inputLocation.value === '') {
                const filter1 = json.filter((obj) => {
                    return obj.contract.toLowerCase().includes('full');


                })
                clean();
                populate(filter1.length, filter1);
            }
            else if (navCheck.checked && inputSearch.value != '') {

                const filter2 = json.filter((obj) => {
                    return obj.contract.toLowerCase().includes('full') && obj.position.toLowerCase().includes(inputSearch.value.toLowerCase()) && obj.location.toLowerCase().includes(inputLocation.value.toLowerCase());
                })
                clean();
                populate(filter2.length, filter2);
            }
            else if (navCheck.checked && inputLocation.value != '') {
                const filter3 = json.filter((obj) => {
                    return obj.contract.toLowerCase().includes('full') && obj.location.toLowerCase().includes(inputLocation.value.toLowerCase());
                })
                clean();
                populate(filter3.length, filter3);

            }


        })


    });










