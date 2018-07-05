export class Avaliacao {
  public id: number;
  public titulo: string;
  public descricao: string;
  public dataCriacao: string;
  public dataFinalizacao: string;
  public finalizado: boolean;
  public enviado: boolean;
  public gestorId: number;
  public pronto: boolean;
  public colaboradoresIds: number[];
  public questionarioId: number;
  public disponivel: boolean;

  public colaboradoresEnviadosIds: number[];
  public dataFinal: string;
  public avaliados: number[];
  public avaliadosObservacoesCompiladas: number [];
}
