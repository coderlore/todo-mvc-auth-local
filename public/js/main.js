const deleteBtn = document.querySelectorAll('.del')
const likeBtn = document.querySelectorAll('.like');
const dislikeBtn = document.querySelectorAll('.dislike');

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(likeBtn).forEach((el) => {
    console.log('disliked')
	el.addEventListener('click', markLiked);
});

Array.from(dislikeBtn).forEach((el) => {
    console.log('disliked')
	el.addEventListener('click', markUnliked);
});

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markLiked() {
	const messageId = this.parentNode.dataset.id;
	try {
		const response = await fetch('messages/markLiked', {
			method: 'put',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				messageIdFromJSFile: messageId,
			}),
		});
		const data = await response.json();
		console.log(data);
		location.reload();
	} catch (err) {
		console.log(err);
	}
}

async function markUnliked() {
	const messageId = this.parentNode.dataset.id;
	try {
		const response = await fetch('messages/markUnliked', {
			method: 'put',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				messageIdFromJSFile: messageId,
			}),
		});
		const data = await response.json();
		console.log(data);
		location.reload();
	} catch (err) {
		console.log(err);
	}
}