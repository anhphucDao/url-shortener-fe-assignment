type ToastProps = {
  message: string
  icon?: string
}

function Toast({ message, icon = '!' }: ToastProps) {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex max-w-sm items-center gap-3 rounded-xl border border-red-200 bg-red-100 px-5 py-4 shadow-2xl transition-all">
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
        {icon}
      </span>
      <p className="text-sm font-semibold text-red-800">{message}</p>
    </div>
  )
}

export default Toast
