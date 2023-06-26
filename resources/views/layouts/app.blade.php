<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MI6 Agent's interface</title>

    @vite('resources/css/app.scss')

    @yield('head')
  </head>
  <body>

    @include('partials.navigation')

    @yield('content')

    <script>
      const navPanel = document.querySelector('.navigation')
      const controller = document.querySelector('.controller')
      controller.addEventListener('click', () => {
        navPanel.classList.toggle('closed')
        const controllerText = controller.querySelector('p')
        controllerText.textContent = controllerText.textContent == "<" ? ">" : "<"
      })
    </script>

  </body>
</html>