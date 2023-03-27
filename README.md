# Товарный редактор

Это React-приложение, позволяющее редактировать структуру товара с текстовыми параметрами и получать полную структуру модели.

### Установка и запуск

Для запуска приложения необходимо установить зависимости и запустить проект локально.

Установите зависимости с помощью команды `npm install`
Запустите проект командой `npm start`
Перейдите по адресу http://localhost:3000/ в браузере

### Использование

При открытии страницы вы увидите форму для редактирования товара. В форме отображаются все параметры товара с типом text, переданные в компонент ModelEditor через свойство params. Также в форме отображаются текущие значения параметров из модели, переданные через свойство model.

Чтобы изменить значение параметра, просто введите новое значение в соответствующее поле ввода. Каждое изменение параметра вызовет функцию onChange из свойства onChange компонента ModelEditor, которая вернет новую модель с обновленными параметрами.

### Дополнительные настройки

##### Добавление новых типов параметров

Чтобы добавить новый тип параметров (например, числовой параметр), необходимо создать новый интерфейс параметра и добавить его тип в поле type. После этого необходимо создать новый компонент редактирования параметра (например, NumberParamEditor) и добавить его в компонент ModelEditor в зависимости от типа параметра.

##### Получение полной структуры модели

Чтобы получить полную структуру модели с обновленными параметрами, необходимо передать функцию обратного вызова onChange в компонент ModelEditor. Эта функция будет вызываться при каждом изменении параметра в форме и возвращать новую модель со всеми измененными параметрами.
