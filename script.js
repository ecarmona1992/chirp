'use strict'

// DOM Elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn =  document.querySelector('.sidebar-header i');

/**************************************/
/**************************************/

// Main page
const goToLoginPage = () => {
	mainPage.style.display = 'none';
	loginPage.style.display = 'grid';
};


middleContent.addEventListener('click', e => {
	if (e.target.classList[1] === 'main-btn') {
		goToLoginPage();
	}
});


btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');

    if (inputUserInfo.value !== "" && inputPassword.value !== ""){
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    }
    else
    goToLoginPage();
    loginModal.style.display = 'block';
});


//Login page
modalX.addEventListener('click', () => {
    loginModal.style.display ='none';
});

loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if (loginUserInfo.value !== "" && loginPassword.value !== "") {
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    } else {
        loginModal.style.display = 'block';
    }
});


// News Feed Page
// Post Modal
postBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalWrapper.classList.add('modal-wrapper-display');
});

const changeOpacity = (x) => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
}

postModalX.addEventListener('click', () => {
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-display');

    if (modalInput.value !== '') {
        changeOpacity(0.5);
    }
});

modalInput.addEventListener('keypress', (e) => {
    if (e.target.value !== '') {
        changeOpacity(1);
    }
});

modalInput.addEventListener('blur', (e) => {
    if (e.target.value === '') {
        changeOpacity(0.5);
    }
});


// Sidebar
user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
});

xBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
})
