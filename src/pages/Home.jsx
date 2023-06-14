import React from 'react'
import { useNavigate } from 'react-router-dom'

const mails = [
  {
  "userId": 1,
  "id": 1,
  "subject": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  "tag": "inbox"
  },
  {
  "userId": 1,
  "id": 2,
  "subject": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  "tag": "inbox"
  },
  {
  "userId": 1,
  "id": 3,
  "subject": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  "tag": "inbox"
  },
  {
  "userId": 1,
  "id": 4,
  "tag": "inbox",
  "subject": "eum et est occaecati",
  "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
  "userId": 1,
  "id": 5,
  "tag": "inbox",
  "subject": "nesciunt quas odio",
  "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
  "userId": 1,
  "id": 6,
  "tag": "draft",
  "subject": "dolorem eum magni eos aperiam quia",
  "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
  "userId": 1,
  "id": 7,
  "tag": "draft",
  "subject": "magnam facilis autem",
  "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
  "userId": 1,
  "id": 8,
  "tag": "draft",
  "subject": "dolorem dolore est ipsam",
  "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
  "userId": 1,
  "id": 9,
  "tag": "spam",
  "subject": "nesciunt iure omnis dolorem tempora et accusantium",
  "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
  "userId": 1,
  "id": 10,
  "tag": "spam",
  "subject": "optio molestias id quia eum",
  "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
  "userId": 2,
  "id": 11,
  "tag": "spam",
  "subject": "et ea vero quia laudantium autem",
  "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
  "userId": 2,
  "id": 12,
  "tag": "spam",
  "subject": "in quibusdam tempore odit est dolorem",
  "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
  "userId": 2,
  "id": 13,
  "tag": "trash",
  "subject": "dolorum ut in voluptas mollitia et saepe quo animi",
  "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
  "userId": 2,
  "id": 14,
  "tag": "trash",
  "subject": "voluptatem eligendi optio",
  "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
  },
  {
  "userId": 2,
  "id": 15,
  "tag": "trash",
  "subject": "eveniet quod temporibus",
  "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  },
  {
  "userId": 2,
  "id": 16,
  "tag": "trash",
  "subject": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
  "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
  "userId": 2,
  "id": 17,
  "tag": "trash",
  "subject": "fugit voluptas sed molestias voluptatem provident",
  "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
  },
  {
  "userId": 2,
  "id": 18,
  "tag": "inbox",
  "subject": "voluptate et itaque vero tempora molestiae",
  "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
  },
  {
  "userId": 2,
  "id": 19,
  "tag": "inbox",
  "subject": "adipisci placeat illum aut reiciendis qui",
  "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
  },
  {
  "userId": 2,
  "id": 20,
  "tag": "inbox",
  "subject": "doloribus ad provident suscipit at",
  "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
  }
  ]

const Home = () => {
  const navigate = useNavigate();
  const onClickMail = (e) => {
    console.log(e.target)
    const id = e.target.id;
    if(id) {
      navigate(`/mail/${id}`);
    }
  }
  return (
    <div className='px-10 w-10/12'>
      <h2 className='p-4 font-bold text-3xl'>All Mails</h2>
      <div className='mt-5 w-full flex flex-col gap-5' onClick={onClickMail}>
        {mails.map((item, index) => (
          <div key={index} id={item.id} className="py-2 px-4 flex flex-row items-center justify-between w-full rounded-lg border">
            <div id={item.id} className='w-[20%] h-full flex justify-center items-center'>
              <p id={item.id} className='font-bold border h-8 w-8 rounded-full text-center'>{item.userId}</p>
            </div>
            <div id={item.id} className='px-4 min-w-[90%]'>
              <p id={item.id} className='overflow-hidden truncate font-bold text-md'>{item.subject}</p>
              <p id={item.id} className='overflow-hidden truncate text-black/40'>{item.body}</p>
            </div>
            <div id={item.id} className='px-2 w-[20%]'>
              <p id={item.id} className='px-3 py-2 border text-center rounded-full'>{item.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home