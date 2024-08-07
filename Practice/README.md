# Props vs State

### Как работают props и state?

React спроектирован по принципу **One-way data flow** — что переводится как Однонаправленный поток данных. Однонаправленный — это значит сверху вниз, от родителя к дочерним. Зачем так сделали? Чтобы архитектура приложения стала более понятной, а работа кода — более предсказуемой.

> **Props** нужны для передачи свойств из родительского компонента в дочерний!

> **State** нужен для изменения _внутреннего_ состояния компонента!

### Что, если нам нужно передать данные "наверх"?

[Подъем состояния](./app/src/assets/122.png)

#### Подъем состояния.

1. Первый способ — просто избежать необходимости передавать данные наверх, если она возникает. Как? С помощью **поднятия состояния**.
   Для этого мы просто переносим state в родительский элемент, а если его надо отобразить в дочернем, передаем его как props.

#### Проброс callback в props.

2. Второй способ. Используется вместе с первым, когда его недостаточно. Ситуация — мы подняли состояние наверх в родительский компонент, но обновить его нам потребовалось из дочернего. Что делать? В этом случае можно передать из родительского компонента в дочерний проп с коллбек-функцией, которая будет обновлять состояние.

#### Менеджеры состояния или React Context.

3. Третий способ — использовать менеджер состояния или React Context, которые позволяют хранить данные в одном месте и получать к ним доступ из любой точки приложения. Это довольно большая тема, если не забуду, вставлю сюда
