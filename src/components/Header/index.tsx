import { Bell, User } from "lucide-react"

export const Header = () => {
    return (
        <div className="bg-surface border-b border-border-light shadow-sm">
            <div className='flex item-center justify-between px-6 py-4'>
                <div className="flex item-center">
                    <h1 className="text-xl text-text-primary">
                        App
                    </h1>
                </div>
                <div className='flex item-center justify-between'>
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                        <Bell className="h-6 w-6 text-text-primary" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                            3
                        </span>
                    </button>

                    <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <User className="h-6 w-6 text-text-primary" />
                        <span className="text-text-primary">John Doe</span>
                    </button>
                </div>
            </div>
        </div>
    )
}