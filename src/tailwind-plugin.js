const init=()=>{
  tailwind.config = {
    plugins: [
      tailwind.plugin(function({ addComponents }) {
        addComponents({
          body:{
            marginTop:'10px'
          },
          '.btn': {
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: '600',
          },
          '.btn-blue': {
            backgroundColor: '#3490dc',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#2779bd'
            },
          },
          '.btn-red': {
            backgroundColor: '#e3342f',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#cc1f1a'
            },
          },
        })
      })
    ]
  }
}
execScript('https://cdn.tailwindcss.com/3.2.4',init)


function execScript(src,cb) {
  var script = document.createElement('script');
  script.src=src;
  document.head.appendChild(script);
  if(cb){
    script.onload = cb
  }
}
