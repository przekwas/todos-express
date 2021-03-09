$('#add-todo').click(e => {
	e.preventDefault();
	const title = $('#title').val();
	const content = $('#content').val();

	$.ajax({
		type: 'POST',
		url: '/api/todos',
		data: { title, content }
	}).then(response => {
		console.log(response);
		getAndDisplayTodos();
	});

	$('#title').val('');
	$('#content').val('');
});

getAndDisplayTodos();

function getAndDisplayTodos() {
	$.ajax({
		type: 'GET',
		url: '/api/todos'
	}).then(todoItems => {
		$('#container').empty();

		for (const id in todoItems) {
			if (id === 'nextid') return;

			const deleteBtn = $('<button>Delete Item</button>').click(() => {
				$.ajax({
					type: 'DELETE',
					url: `/api/todos/${id}`
				}).then(response => {
					console.log(response);
					getAndDisplayTodos();
				});
			});

			const editButton = $('<button>Edit Item</button>').click(() => {
				/*
                    - launch the modal
                    - modal will have 2 inputs in it filled in with our current values
                    - modal will have close and save changes buttons
                    const title = $('#edit-title').val();
	                const content = $('#edit-content').val();
                    $.ajax({
                        type: 'PUT',
                        url: `/api/todos/${id}`
                        data: { title, content }
                    })
                    .then(response => {
                        console.log(response);
                        getAndDisplayTodos();
                        - close modal
                    })
                */
			});

			$(`
            <div>
                <div><b>${todoItems[id].title}</b></div>
                <p>${todoItems[id].content}</p>
            </div>
        `)
				.appendTo('#container')
				.append(deleteBtn);
		}
	});
}