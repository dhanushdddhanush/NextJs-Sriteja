import Image from "next/image"
import { Truck, MapPin, Clock, Shield } from "lucide-react"

export function AllIndiaDelivery() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Delivery Services
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-gray-900 md:text-4xl">
            All India Delivery Available
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We deliver high-quality printing solutions to every corner of India. 
            Your order reaches you safely and on time, wherever you are.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Animation Side */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <div className="relative h-64 w-64 overflow-hidden rounded-xl">
                  <Image
                    src="/images/Delivery.gif"
                    alt="All India Delivery Animation"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features Side */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Nationwide Shipping
                </h3>
                <p className="mt-1 text-gray-600">
                  Fast and reliable delivery to all states and union territories across India.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Pan India Coverage
                </h3>
                <p className="mt-1 text-gray-600">
                  From metro cities to remote villages, we reach every location in India.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Timely Delivery
                </h3>
                <p className="mt-1 text-gray-600">
                  Estimated delivery times with real-time tracking for your peace of mind.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Safe Packaging
                </h3>
                <p className="mt-1 text-gray-600">
                  Professional packaging ensures your prints arrive in perfect condition.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-blue-100 px-6 py-3 text-blue-700">
            <span className="font-semibold">🚚 Delivering to 28+ States & 8+ Union Territories</span>
          </div>
        </div>
      </div>
    </section>
  )
}
