import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface ImportantLinksProps {
    openCreateActivityModal: () => void
}

export function ImportantLinks({
    openCreateActivityModal
}: ImportantLinksProps) {
    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.airbnb.com.br/rooms/1047000115124214213214521421342152131
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0"/>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.airbnb.com.br/rooms/1047000115124214213214521421342152131
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0"/>
                </div>
            </div>
            
            <Button onClick={openCreateActivityModal} variant="secondary" size="full">
                <Plus className='size-5' />
                Cadastrar atividade
            </Button>
        </div>
    )
}