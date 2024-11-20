import { FileText, Shield, Clock, Check } from 'lucide-react'

export default function TitleServices() {
  const services = [
    { 
      icon: FileText, 
      title: 'Title Search', 
      description: 'Comprehensive property history research',
      features: ['Ownership verification', 'Lien detection', 'Easement identification']
    },
    { 
      icon: Shield, 
      title: 'Title Insurance', 
      description: 'Protection against potential ownership disputes',
      features: ['Defect coverage', 'Legal cost protection', 'Peace of mind guarantee']
    },
    { 
      icon: Clock, 
      title: 'Escrow Services', 
      description: 'Secure handling of funds and documents',
      features: ['Neutral third-party', 'Timely disbursements', 'Document safekeeping']
    },
  ]

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Title Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md">
              <service.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-center text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-center text-gray-600">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="rounded-md bg-primary px-6 py-3 text-white hover:bg-primary-dark">
            Learn More About Our Title Services
          </button>
        </div>
      </div>
    </div>
  )
}