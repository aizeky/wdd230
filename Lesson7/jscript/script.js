const weekDay = new Date();
const message = document.querySelector('.announcement');

            if (weekDay.getDay() == 1 || weekDay.getDay() == 2) {
                message.style.display = 'block';
}

let currentdate= document.lastModified;
document.getElementById('modified').textContent = 'Last Updated: '+ currentdate + ".";

const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation');

hamburgerBtn.addEventListener('click', ()=> {navigation.classList.toggle('responsive')}, false);

const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
dateStyle: "full"
}).format(now);

// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


