interface LinkType {
  id: number
  label: string
}

const links: LinkType[] = [{ id: 1, label: 'furl.one' }]

export function DropSelector() {
  return (
    <select>
      {links.map(link => (
        <option key={link.id}>{link.label}</option>
      ))}
    </select>
  )
}
