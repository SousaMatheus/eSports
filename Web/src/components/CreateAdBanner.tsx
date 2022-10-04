import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
  return (
    <div className="bg-duoGradient self-stretch mt-8 pt-1 overflow-hidden rounded-lg">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div className="inline">
          <strong className="text-white block text-2xl font-black">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <div>
          <Dialog.Trigger className="flex items-center gap-3 text-white bg-violet-500 hover:bg-violet-600 px-4 py-3 rounded-md justify-between">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </Dialog.Trigger>
        </div>
      </div>
    </div>
  )
}
