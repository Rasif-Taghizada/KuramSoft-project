const portalHeader = document.querySelector('.portal-container-top');

portalHeader.addEventListener('click', () => {
    const portalBottom = document.querySelector('.portal-container-bottom');
    portalBottom.classList.toggle('portal-bottom-active');
})




//TODO Portal Tabs
const allPortalTabs = document.querySelectorAll('.portal-tabs > li')
const allPortalContent = document.querySelectorAll('.portal-tab-all-contents > .portal-tab-content')
allPortalTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        allPortalTabs.forEach((tab) => tab.classList.remove('portal-tab-active'))
        tab.classList.add('portal-tab-active')

        allPortalContent.forEach((content) => content.classList.remove('portal-tab-content-active'))
        allPortalContent[index].classList.add('portal-tab-content-active')
    })
})




