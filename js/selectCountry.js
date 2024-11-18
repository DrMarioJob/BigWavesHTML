async function loadCountryCodes() {
    const dropdownContainers = document.querySelectorAll('.custom-dropdown');

    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();

        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

        dropdownContainers.forEach((container) => {
            const dropdownSelected = container.querySelector('.dropdown-selected');
            const dropdownOptions = container.querySelector('.dropdown-options');
            const selectedFlag = container.querySelector('.selected-flag');
            const selectedText = container.querySelector('.selected-text');
            const hiddenInput = container.querySelector('.selectedCountry');

            if (!dropdownSelected || !dropdownOptions || !selectedFlag || !selectedText || !hiddenInput) {
                console.error('Отсутствуют обязательные элементы в контейнере:', container);
                return;
            }

            const setSelectedCountry = (country) => {
                selectedFlag.src = country.flags.svg;
                selectedFlag.style.display = 'inline';
                selectedText.textContent = ` (${country.idd.root}${country.idd.suffixes[0]})`;
                hiddenInput.value = `${country.idd.root}${country.idd.suffixes[0]}`;
            };

            countries.forEach((country, index) => {
                if (country.idd?.root && country.idd?.suffixes) {
                    const countryCode = `${country.idd.root}${country.idd.suffixes[0]}`;

                    const option = document.createElement('div');
                    option.classList.add('dropdown-option');
                    option.dataset.value = countryCode;

                    option.innerHTML = `
                        <img src="${country.flags.svg}" alt="${country.name.common} flag" style="width: 20px; height: 15px; margin-right: 10px;">
                         (${countryCode})
                    `;

                    option.addEventListener('click', () => {
                        setSelectedCountry(country);
                        dropdownOptions.style.display = 'none';
                    });

                    dropdownOptions.appendChild(option);

                    if (index === 0) {
                        setSelectedCountry(country);
                    }
                }
            });

            dropdownSelected.addEventListener('click', () => {
                dropdownOptions.style.display =
                    dropdownOptions.style.display === 'block' ? 'none' : 'block';
            });
        });
    } catch (error) {
        console.error('Ошибка загрузки данных о странах:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadCountryCodes);