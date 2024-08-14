// 定义一个函数来获取 JSON 数据并动态生成 HTML
async function loadQA() {
    try {
        // 从 Q&A.json 文件中获取数据
        const response = await fetch("../Q&A.json");
        const data = await response.json();

        // 获取容器元素
        const container = document.getElementById('qa-container');

        // 初始化问题计数器
        let questionNumber = 1;

        // 遍历数据并动态生成 HTML
        data.forEach(item => {
            // 创建一个新的问答项
            const qaItem = document.createElement('div');
            qaItem.className = 'qa-item';

            // 创建并设置问题标题
            const question = document.createElement('h2');
            question.textContent = `Q${questionNumber}: ${item.question}`;
            question.className = 'question'
            qaItem.appendChild(question);

            // 创建并设置答案
            const answer = document.createElement('p');
            answer.innerHTML = "<strong>" + "A" + questionNumber + ":</strong>" + item.answer;
            answer.className = 'answer'
            qaItem.appendChild(answer);

            // 将问答项添加到容器中
            container.appendChild(qaItem);
            
            // 递增问题计数器
            questionNumber++;
        });
    } catch (error) {
        console.error('获取 Q&A.json 文件时出错:', error);
    }
}

// 在页面加载时调用 loadQA 函数
window.onload = loadQA;


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems);

//     document.getElementById('join-chat').addEventListener('click', function() {
//         var instance = M.Modal.getInstance(document.getElementById('chat-modal'));
//         instance.open();
//     });
// });