const data = {
    title: "Welcome to CS3210 Template Engine Lab",
    content: "This is a simple template engine demonstration.",
    author: "Dr.Red",
};
function renderTemplate(template, data) {
    for (const key in data) {
        const regex = new RegExp('{{' + key + '}}', 'g');
        template = template.replace(regex, data[key]);
    }
    return template;
}
const template = `
    <h3>Part1</h3>
    <p>this is for lab9</p>
    <p>Author: Mark Ferguoon</p>
`;
const app = document.getElementById('app');
app.innerHTML = renderTemplate(template, data);

  
