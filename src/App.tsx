import { LinearBlur } from "./LinearBlur";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Фиксированный блюр в топе */}
      <div className="blur-container">
        <LinearBlur
          side="bottom"
          strength={15}
          topOffset={30} // Полный блюр от 0% до 30%, переход к прозрачности от 30% до 100%
          tint="rgba(255, 255, 255, 0.1)"
          style={{
            width: "100%",
            height: "100px",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000,
          }}
        />
      </div>

      {/* Контент страницы */}
      <div className="content">
        {/* Заголовок */}
        <header className="header">
          <h1>Тестирование Progressive Blur</h1>
          <p>Прокрутите страницу, чтобы увидеть эффект блюра сверху</p>
        </header>

        {/* Цветные блоки */}
        <div className="color-block red">
          <h2>Красный блок</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div className="color-block blue">
          <h2>Синий блок</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </div>

        <div className="color-block green">
          <h2>Зелёный блок</h2>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>
        </div>

        <div className="color-block yellow">
          <h2>Жёлтый блок</h2>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur?
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </p>
        </div>

        <div className="color-block purple">
          <h2>Фиолетовый блок</h2>
          <p>
            Similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio.
          </p>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est.
          </p>
        </div>

        <div className="color-block orange">
          <h2>Оранжевый блок</h2>
          <p>
            Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
            debitis aut rerum necessitatibus saepe eveniet ut et voluptates
            repudiandae sint et molestiae non recusandae.
          </p>
          <p>
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut
            reiciendis voluptatibus maiores alias consequatur aut perferendis
            doloribus asperiores repellat.
          </p>
        </div>

        {/* Дополнительный контент для прокрутки */}
        <div className="text-content">
          <h2>Дополнительный текстовый контент</h2>
          <p>
            Этот раздел содержит много текста для демонстрации эффекта прокрутки
            и работы блюра.
          </p>

          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="text-paragraph">
              <h3>Параграф {i + 1}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
