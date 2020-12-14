import { zuck } from './db_people'
import { todos } from './db_todos'
import { mockasync } from './mockutils'

const keepLoggedIn = true

export default {
  login (username, password) {
    return mockasync(zuck)
  },
  logout () {
    return mockasync({})
  },
  whoami () {
    const iam = {authenticated: keepLoggedIn}
    if (iam.authenticated) {
      iam.user = zuck
    }
    return mockasync(iam)
  },
  settings () {
    return mockasync({
      SENTRY_DSN_FRONT: ''
      // SENTRY_DSN_FRONT: 'https://abcd1234@sentry.example.com/10'
    })
  },
  list_todos () {
    return mockasync(todos)
  },
  add_todo (newtask) {
    return mockasync({description: newtask, done: false})
  },
  get_user_details (username) {
    const avatar = {
      '@daniel.simoes.elias': 'https://gabrielgs.files.wordpress.com/2008/05/super_mario_revolution.jpg?w=594',
      '@test1': 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
      '@test2': 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
      '@test3': 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
      '@test4': 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
      '@test5': 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
      '@test6': 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
      '@test7': 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
      '@test8': 'https://www.hojeemdia.com.br/polopoly_fs/1.145257.1551964148!/image/image.jpg_gen/derivatives/landscape_653/image.jpg'
    }[username]

    return mockasync(
      {
        username,
        avatar,
        last_tweet: 'Penso logo existo',
        ifollow: false
      }
    )
  },
  tweet (text) {
    return mockasync({
      id: 1000,
      avatar: 'https://gabrielgs.files.wordpress.com/2008/05/super_mario_revolution.jpg?w=594',
      name: zuck.name,
      username: zuck.username,
      created_at: new Date().toISOString(),
      text
    })
  },
  follow (username) {
    return mockasync({})
  },
  unfollow (username) {
    return mockasync({})
  },

  list_items (username) {
    const d = new Date()
    const _1min = 60000
    const _1hora = 60 * _1min
    const d1 = new Date(d - 15 * _1min)
    const d2 = new Date(d - 4 * _1hora)
    const d3 = new Date(d - 10 * _1hora)
    const d4 = new Date(d - 15 * _1hora)
    const d5 = new Date(d - 30 * _1hora)
    return mockasync([
      {
        avatar: 'https://gabrielgs.files.wordpress.com/2008/05/super_mario_revolution.jpg?w=594',
        name: 'Daniel',
        username: '@daniel.simoes.elias',
        created_at: d1.toISOString(),
        text: ` Apanhando mas indo...`
      },

      {divider: true, inset: true},

      {
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
        name: 'Bia',
        username: '@test1',
        created_at: d2.toISOString(),
        text: ` Ainda tem barrinha ?`
      },

      {divider: true, inset: true},

      {
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
        name: 'JP',
        username: '@test2',
        created_at: d3.toISOString(),
        text: `*ainda não sei*`
      },

      {divider: true, inset: true},

      {
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
        name: 'Tales',
        username: '@test3',
        created_at: d4.toISOString(),
        text: ` Análise...`
      },

      {divider: true, inset: true},

      {
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
        name: 'Monica',
        username: '@test4',
        created_at: d5.toISOString(),
        text: `HIHIHIHIHI`
      },

      {divider: true, inset: true},

      {
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
        name: 'Guilherme',
        username: '@test5',
        created_at: 'Xmin',
        text: ` Bom dia!`
      },

      {divider: true, inset: true},

      {
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
        name: 'Tony',
        username: '@test6',
        created_at: 'Xmin',
        text: ` O interior do onibus da Buser é lindo!!`
      },

      {divider: true, inset: true},

      {
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
        name: 'Renzo',
        username: '@test7',
        created_at: 'Xmin',
        text: ` Não faça o trabalho de RH!`
      },

      {divider: true, inset: true},

      {
        avatar: 'https://www.hojeemdia.com.br/polopoly_fs/1.145257.1551964148!/image/image.jpg_gen/derivatives/landscape_653/image.jpg',
        name: 'Mussum',
        username: '@test8',
        created_at: 'Xmin',
        text: ` Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.`
      }
    ])
  }
}
