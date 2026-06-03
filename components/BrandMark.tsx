export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brandMark" aria-label="LÅTCH CAPITAL">
      <span className="brandGlyph">Å</span>
      {!compact && (
        <span className="brandWords">
          <strong>LÅTCH</strong>
          <em>CAPITAL</em>
        </span>
      )}
    </div>
  );
}
