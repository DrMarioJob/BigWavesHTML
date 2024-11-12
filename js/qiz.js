document.addEventListener('DOMContentLoaded', function () {
    const stages = [
        {
            element: document.getElementById('stage1'),
            answers: 'qizSel1',
            title: document.getElementById('qizTitle1')
        },
        {
            element: document.getElementById('stage2'),
            answers: 'qizSel1',
            title: document.getElementById('qizTitle2')
        }
    ];

    let currentStage = 0;
    const qizStart = document.getElementById('qizStart');
    const qizAnd = document.getElementById('qizAnd');
    const qizNext = document.getElementById('qizNext');
    const qizFirst = document.getElementById('qizFirst');
    const modalQizWr = document.querySelector('.modalQizWr');
    const qizForm = document.getElementById('qizFormMain');
    const formData = {
        stageAnswers: {},
        contactInfo: {}
    };

    stages.forEach((stage, index) => {
        stage.element.style.display = index === 0 ? 'flex' : 'none';
        stage.title.style.display = index === 0 ? 'block' : 'none';
    });

    qizAnd.textContent = stages.length;
    qizStart.textContent = 1;

    qizNext.addEventListener('click', function () {
        if (currentStage < stages.length - 1) {
            storeStageAnswers();
            currentStage++;
            updateStageVisibility();
        } else {
            storeStageAnswers();
            modalQizWr.style.display = 'flex';
        }
    });

    qizFirst.addEventListener('click', function () {
        if (currentStage > 0) {
            currentStage--;
            updateStageVisibility();
        } else if (currentStage === stages.length - 1) {
            modalQizWr.style.display = 'none';
        }
    });

    qizForm.addEventListener('button#qizButton', function (event) {
        event.preventDefault();
        storeContactInfo();
        console.log('Form Data:', formData);
        sendQuizData(formData);
    });

    function storeStageAnswers() {
        const answers = document.getElementsByName(stages[currentStage].answers);
        for (let answer of answers) {
            if (answer.checked) {
                formData.stageAnswers[`stage${currentStage + 1}`] = answer.value;
                break;
            }
        }
    }

    function storeContactInfo() {
        formData.contactInfo = {
            name: document.getElementById('qizName').value,
            phoneCode: document.getElementById('qizPCode').value,
            phone: document.getElementById('qizPhone').value,
            email: document.getElementById('qizMail').value,
            messenger: document.querySelector('[name="qizMedia"]:checked').value,
            action: document.querySelector('[name="qizAction"]:checked').value
        };
    }

    function updateStageVisibility() {
        stages.forEach((stage, index) => {
            stage.element.style.display = index === currentStage ? 'flex' : 'none';
            stage.title.style.display = index === currentStage ? 'block' : 'none';
        });
        qizStart.textContent = currentStage + 1;
        updateProgressBar();
    }

    function updateProgressBar() {
        const progressPercentage = ((currentStage + 1) / stages.length) * 100;
        document.querySelector('.qizProg').style.width = `${progressPercentage}%`;
    }

    function sendQuizData(data) {
        const urlParams = new URLSearchParams();
        for (const key in data.stageAnswers) {
            urlParams.append(key, data.stageAnswers[key]);
        }
        for (const key in data.contactInfo) {
            urlParams.append(key, data.contactInfo[key]);
        }
        console.log('Sending data to the server:', urlParams.toString());
    }
});
