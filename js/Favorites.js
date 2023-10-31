export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }

    update() {
        this.removeAllTr()

        [{
            login: 'iCaioReis',
            name: "Caio Reis",
            public_repos: ''
        }]
    }

    createRow(){
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/iCaioReis.png" alt="">
                <a href="https://github.com/iCaioReis" target="_blank">
                    <p>Caio Reis</p>
                    <span>iCaioReis</span>
                </a>
        </td>
        <td class="repositories">30</td>
        <td class="followers">3</td>
        <td>
            <button class="remove">&times;</button>
        </td>`

        return tr
    }

    removeAllTr() {
        const tbody = this.root.querySelector('table tbody')

        tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}