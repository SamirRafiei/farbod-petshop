'use strict';

// Demo catalog. Replace sample specifications, prices and photography before launch.
const products = [
  {id:'dog-harness',pet:'dogs',name:'Everyday walking harness',type:'Walk',detail:'Adjustable fit · Size M',price:8990,image:'product-01.jpg',badge:'Everyday essential',description:'A simple, adjustable harness for daily walks. Soft webbing and easy-release buckles keep the design practical and comfortable.',specs:{Material:'Woven nylon',Size:'Medium · chest 45–60 cm',Colour:'Turquoise'}},
  {id:'cat-scratcher',pet:'cats',name:'Natural scratching post',type:'Home',detail:'Sisal & wood · 55 cm',price:10990,image:'product-04.jpg',description:'A dedicated place to stretch and scratch, with natural sisal texture and a simple base that sits comfortably in your home.',specs:{Material:'Sisal, wood & soft fabric',Height:'55 cm',Colour:'Natural / cream'}},
  {id:'fish-aquarium',pet:'fish',name:'Clear-view aquarium',type:'Habitat',detail:'Glass tank · 30 litres',price:24990,image:'product-07.jpg',badge:'A fresh start',description:'A clean-lined glass aquarium for a carefully planned freshwater setup. The planting shown is styling inspiration; fish, plants and equipment are not included.',specs:{Material:'Clear glass',Capacity:'30 litres',Included:'Tank only'}},
  {id:'bird-perch',pet:'birds',name:'Natural wood perch',type:'Habitat',detail:'Textured wood · 25 cm',price:3490,image:'product-10.jpg',description:'A natural branch-style perch that adds texture and variety to an enclosure. Choose a diameter appropriate for your bird’s feet and check the fitting regularly.',specs:{Material:'Natural wood',Length:'Approx. 25 cm',Fitting:'Screw attachment'}},
  {id:'dog-bowl',pet:'dogs',name:'Everyday ceramic bowl',type:'Feeding',detail:'Glazed ceramic · 800 ml',price:4990,image:'product-02.jpg',description:'A simple ceramic bowl for food or fresh water. Its understated shape and turquoise glaze make it an easy addition to a daily feeding corner.',specs:{Material:'Glazed ceramic',Capacity:'800 ml',Colour:'Turquoise'}},
  {id:'cat-tray',pet:'cats',name:'Covered litter tray',type:'Home',detail:'Removable cover · 50 cm',price:11990,image:'product-05.jpg',description:'A covered tray with a removable top for everyday cleaning. Check the dimensions against your cat’s size and preferred toileting space before choosing.',specs:{Material:'Polypropylene',Dimensions:'50 × 40 × 40 cm',Colour:'Charcoal'}},
  {id:'fish-filter',pet:'fish',name:'Compact internal filter',type:'Care',detail:'Freshwater · Up to 40 L',price:6990,image:'product-08.jpg',description:'A compact internal filter concept for small freshwater aquariums. Final flow rate and suitability should be checked against the aquarium and its inhabitants.',specs:{Type:'Internal filter','Tank size':'Up to 40 litres',Colour:'Black'}},
  {id:'bird-bowl',pet:'birds',name:'Clip-on feeding bowl',type:'Feeding',detail:'Stainless steel · 300 ml',price:2990,image:'product-11.jpg',description:'A removable stainless steel bowl with a cage attachment for a tidy feeding area. Confirm the mounting bracket fits the enclosure before use.',specs:{Material:'Stainless steel',Capacity:'300 ml',Fitting:'Cage bracket'}},
  {id:'dog-bed',pet:'dogs',name:'Soft everyday bed',type:'Rest',detail:'Cushioned edges · 70 cm',price:16990,image:'product-03.jpg',description:'A softly cushioned place to settle after a busy day. Raised edges offer a resting spot for a head or paws. Measure your pet at rest to choose a comfortable fit.',specs:{Material:'Woven fabric & filling',Dimensions:'70 × 55 cm',Colour:'Mist blue'}},
  {id:'cat-wand',pet:'cats',name:'Feather play wand',type:'Play',detail:'Interactive toy · 40 cm',price:2490,image:'product-06.jpg',description:'A lightweight wand for short, supervised play sessions together. Store safely after play and replace if the cord or feathers become damaged.',specs:{Material:'Wood, cord & feathers','Wand length':'40 cm',Use:'Supervised play'}},
  {id:'fish-food',pet:'fish',name:'Daily tropical flakes',type:'Feeding',detail:'Sample food concept · 100 ml',price:1990,image:'product-09.jpg',description:'An illustrative tropical fish food listing. Ingredients, nutritional information and feeding guidance must be supplied by the selected manufacturer before this product is offered for sale.',specs:{Format:'Flakes','Pack size':'100 ml',Ingredients:'To be confirmed'}},
  {id:'bird-toy',pet:'birds',name:'Natural foraging toy',type:'Play',detail:'Woven fibres · 18 cm',price:3990,image:'product-12.jpg',description:'A woven toy concept for curious birds. Select a suitable size and material for the species, supervise use and remove worn or damaged pieces.',specs:{Material:'Woven natural fibres',Length:'Approx. 18 cm',Use:'Supervised enrichment'}}
];
const petNames = {dogs:'Dogs',cats:'Cats',fish:'Fish',birds:'Birds'};
const price = value => `${new Intl.NumberFormat('en-GB').format(value)} Ft`;
const grid = document.querySelector('#product-grid');
const search = document.querySelector('#product-search');
const sort = document.querySelector('#sort');
const modal = document.querySelector('#product-modal');
const form = document.querySelector('#inquiry-form');
let activePet = 'all';
let modalTrigger = null;
let focusInquiry = false;
function renderProducts() {
  const query = search.value.trim().toLocaleLowerCase();
  let shown = products.filter(p => (activePet === 'all' || p.pet === activePet) && `${p.name} ${p.pet} ${p.type} ${p.detail} ${Object.values(p.specs).join(' ')}`.toLocaleLowerCase().includes(query));
  if (sort.value === 'price-asc') shown.sort((a,b) => a.price-b.price);
  if (sort.value === 'price-desc') shown.sort((a,b) => b.price-a.price);
  if (sort.value === 'name') shown.sort((a,b) => a.name.localeCompare(b.name));
  grid.innerHTML = shown.map(p => `<article class="product-card"><button class="product-image-button" type="button" data-product="${p.id}" aria-label="View ${p.name}"><img src="assets/${p.image}" alt="${p.name}" width="600" height="600" loading="lazy">${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}</button><div class="product-info"><p class="product-type">${petNames[p.pet].toUpperCase()} / ${p.type.toUpperCase()}</p><h3 class="product-title"><button type="button" data-product="${p.id}">${p.name}</button></h3><p class="product-meta">${p.detail}</p><div class="product-bottom"><span class="product-price">${price(p.price)}</span><button class="detail-link" type="button" data-product="${p.id}" aria-label="View details of ${p.name}">View details</button></div></div></article>`).join('');
  document.querySelector('#empty-state').hidden = shown.length > 0;
  document.querySelector('#result-count').textContent = `${shown.length} ${shown.length === 1 ? 'essential' : 'essentials'}${activePet === 'all' ? ' for all pets' : ` for ${activePet}`}${query ? ' matching your search' : ''}`;
  document.querySelectorAll('[data-filter]').forEach(button => {const selected = button.dataset.filter === activePet;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});
  document.querySelectorAll('[data-category]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.category === activePet)));
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click',() => {activePet=button.dataset.filter;renderProducts();}));
document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click',() => {activePet=button.dataset.category;search.value='';renderProducts();document.querySelector('#catalog').scrollIntoView({block:'start'});}));
search.addEventListener('input',renderProducts);
sort.addEventListener('change',renderProducts);
document.querySelector('#reset-filters').addEventListener('click',()=>{activePet='all';search.value='';sort.value='featured';renderProducts();search.focus();});
grid.addEventListener('click',event => {
  const button = event.target.closest('[data-product]');
  if (!button) return;
  const p = products.find(item=>item.id===button.dataset.product);
  modalTrigger=button;
  document.querySelector('#modal-content').innerHTML=`<div class="modal-grid"><img class="modal-image" src="assets/${p.image}" alt="${p.name}" width="600" height="600"><div class="modal-body"><p class="eyebrow">${petNames[p.pet]} / ${p.type}</p><h2 id="modal-title">${p.name}</h2><p class="modal-price">${price(p.price)}</p><p>${p.description}</p><dl>${Object.entries(p.specs).map(([key,value])=>`<div><dt>${key}</dt><dd>${value}</dd></div>`).join('')}</dl><button class="button primary" type="button" id="ask-product">Ask about this product</button><small>Sample product, specifications and price. Image is illustrative. Availability to be confirmed.</small></div></div>`;
  modal.showModal();
  document.body.style.overflow='hidden';
  document.querySelector('#ask-product').addEventListener('click',()=>{
    focusInquiry=true;modal.close();form.elements.pet.value=p.pet;form.elements.message.value=`I’m interested in the ${p.name}. Could you tell me more about sizes and availability?`;
    document.querySelector('#inquiry-preview').hidden=true;
    document.querySelector('#contact').scrollIntoView({block:'start'});
    form.elements.name.focus({preventScroll:true});
  });
});
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close();}});
modal.addEventListener('close',()=>{document.body.style.overflow='';if(focusInquiry){focusInquiry=false;form.elements.name.focus({preventScroll:true});}else if(modalTrigger?.isConnected){modalTrigger.focus({preventScroll:true});}});
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menuButton.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
window.matchMedia('(min-width: 641px)').addEventListener('change',closeMenu);
form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const preview=document.querySelector('#inquiry-preview');
  document.querySelector('#preview-content').textContent=`From: ${form.elements.name.value.trim()}\nEmail: ${form.elements.email.value.trim()}\nPet: ${petNames[form.elements.pet.value]}\n\n${form.elements.message.value.trim()}`;
  preview.hidden=false;preview.focus({preventScroll:true});preview.scrollIntoView({block:'nearest'});
});
form.addEventListener('input',()=>{document.querySelector('#inquiry-preview').hidden=true;});
renderProducts();
