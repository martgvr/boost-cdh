import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import './services.css'

function Services() {
  return (
    <div className='services' id='services'>
      <ServiceCard 
        layout={'left'} 
        title={'nuestros servicios'} 
        image={'service1.png'} 
        subtitle={'Desarrollo web'} 
        items={[ 'Diseño y programación.', 'Landing page.', 'Ecommerce.', 'Registro de dominio y planes de hosting.', 'Mantenimiento del sitio web.' ]} 
        description={'Creamos tu sitio web para que tus clientes puedan visualizar tu emprendimiento ó empresa, para conseguirlo se hace uso de tecnologías de software del lado del servidor y del cliente que involucran una combinación de procesos de base de datos con el uso de un navegador web a fin de realizar determinadas tareas o mostrar información.'} 
      />

      <ServiceCard 
        layout={'right'} 
        title={'nuestros servicios'} 
        image={'service2.png'} 
        subtitle={'Marketing en redes sociales'} 
        items={[ 'Posicionamiento SEO.', 'Facebook Ads.', 'Social Advertising.', 'Google Ads.', 'E-mail marketing.', 'Community Management.', 'Creatividades', 'Instagram, Facebook, Tik Tok' ]}
        description={'Ayudamos a elevar tu audiencia y convertir a personas interesadas, en clientes potenciales de una forma significativa. Un contenido relevante y diseñado para tu audiencia es clave para aumentar la presencia que tiene tu marca dentro de los medios digitales.'} 
      />

      <ServiceCard 
        layout={'left'}
        title={'nuestros servicios'}
        image={'service3.png'}
        subtitle={'Branding'}
        items={[ 'Diseño y creación de logo', 'Identidad corporativa', 'Manual de marca.' ]}
        description={'Construimos tu marca mediante la gestión planificada de todos los procesos gráficos, comunicacionales y de posicionamiento que se llevan a cabo. El objetivo principal del branding es extender la marca de la empresa en el mercado, posicionarla y ubicarla en la mente de los consumidores.'}
      />
    </div>
  )
}

export default Services