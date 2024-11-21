document.addEventListener('DOMContentLoaded', () => {
    async function loadCountryCodes() {
        const phoneInputs = document.querySelectorAll('.sec10Phone');
        const countryCodeMap = []; // Список всех кодов стран

        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const countries = await response.json();

            countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

            // Сохраняем данные о странах
            countries.forEach((country) => {
                if (country.idd?.root && country.idd?.suffixes) {
                    countryCodeMap.push({
                        code: `${country.idd.root}${country.idd.suffixes[0]}`,
                        name: country.name.common,
                        flag: country.flags.svg,
                    });
                }
            });

            // Привязываем обработчики к каждому полю телефона
            phoneInputs.forEach((phoneInput) => {
                const suggestionsContainer = phoneInput.nextElementSibling;

                if (!suggestionsContainer || !suggestionsContainer.classList.contains('phoneSuggestions')) {
                    console.error('Не удалось найти контейнер подсказок для поля:', phoneInput);
                    return;
                }

                phoneInput.addEventListener('input', () => {
                    const inputValue = phoneInput.value.trim();
                    suggestionsContainer.innerHTML = ''; // Очищаем старые подсказки
                    suggestionsContainer.style.display = 'none';

                    if (inputValue.startsWith('+')) {
                        const matchingCountries = countryCodeMap.filter((entry) =>
                            entry.code.startsWith(inputValue)
                        );

                        if (matchingCountries.length > 0) {
                            matchingCountries.forEach((country) => {
                                const suggestion = document.createElement('div');
                                suggestion.innerHTML = `
                                <img src="${country.flag}" alt="${country.name} flag" style="width: 20px; height: 15px; margin-right: 10px;">
                                ${country.name} (${country.code})
                            `;
                                suggestion.addEventListener('click', () => {
                                    phoneInput.value = country.code;
                                    suggestionsContainer.style.display = 'none';
                                });
                                suggestionsContainer.appendChild(suggestion);
                            });

                            suggestionsContainer.style.display = 'block';
                        }
                    }
                });

                // Закрытие подсказок при клике вне
                document.addEventListener('click', (e) => {
                    if (
                        suggestionsContainer &&
                        !suggestionsContainer.contains(e.target) &&
                        e.target !== phoneInput
                    ) {
                        suggestionsContainer.style.display = 'none';
                    }
                });
            });
        } catch (error) {
            console.error('Ошибка загрузки данных о странах:', error);
        }
    }

    loadCountryCodes(); // Запуск функции
});
