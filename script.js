document.addEventListener('DOMContentLoaded', () => {
    const issues = [
        
        { id: 1, title: "Erro no Login Mobile", priority: 1, impact: 8500, status: "Crítico" },
        { id: 2, title: "Lentidão ao carregar relatórios", priority: 2, impact: 200, status: "Alto" },
        { id: 3, title: "Sugestão de mudar cor de botão", priority: 5, impact: 50, status: "Baixo" }
    ];

    const issueList = document.getElementById('issue-list');

    function renderIssues(sortedIssues) {
        issueList.innerHTML = '';
        sortedIssues.forEach(issue => {
            const card = document.createElement('div');
        
            const impactClass = issue.impact > 1000 ? 'impact-high' : '';
            card.className = `issue-card ${impactClass}`;
            card.innerHTML = `
                <div>
                    <strong>${issue.title}</strong> - <span class="priority-high">P${issue.priority}</span>
                    <p>Status: ${issue.status}</p>
                </div>
                <div>
                    Impacto: <strong>${issue.impact} Usuários</strong>
                </div>
            `;
            issueList.appendChild(card);
        });
    }

    document.getElementById('sort-by').addEventListener('change', (e) => {
        const key = e.target.value;
        const sorted = [...issues].sort((a, b) => a[key] - b[key]);
        renderIssues(sorted);
    });

    renderIssues(issues); 
});