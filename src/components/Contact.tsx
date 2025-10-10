import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  User,
  Building,
  Loader2
} from "lucide-react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Função para enviar o email
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // Pega os valores dos campos do formulário
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    try {
      // Cria o link mailto com todas as informações
      const subject = `Solicitação de Orçamento - ${company}`;
      const body = `
Nome: ${name}
Empresa: ${company}
E-mail: ${email}
Telefone: ${phone}

Mensagem:
${message}

---
Este email foi enviado através do site Aoki Company Brasil
      `.trim();

      const mailtoLink = `mailto:aokicompanybrasil@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Abre o cliente de email padrão
      window.location.href = mailtoLink;

      // Opcional: Mostrar mensagem de sucesso
      setTimeout(() => {
        alert('Solicitação enviada com sucesso! Verifique seu email.');
        form.reset();
      }, 1000);

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Erro ao enviar solicitação. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Entre em Contato
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Solicite seu 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Orçamento</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe está pronta para atender suas necessidades. Entre em contato e 
            descubra como podemos ajudar a melhorar a segurança viária do seu projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-tech">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Send className="w-6 h-6 text-primary" />
                Solicite um Orçamento
              </CardTitle>
              <CardDescription>
                Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nome Completo
                    </Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Seu nome completo" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Empresa
                    </Label>
                    <Input 
                      id="company" 
                      name="company"
                      placeholder="Nome da empresa" 
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      E-mail
                    </Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="seu@email.com" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Telefone
                    </Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      placeholder="(11) 99999-9999" 
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Descreva seu projeto e necessidades específicas..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Solicitação
                    </>
                  )}
                </Button>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Resposta garantida em até 24 horas
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information - Mantido igual */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefone</h3>
                    <p className="text-muted-foreground">+55 (18) 98808-2235</p>
                    <p className="text-sm text-muted-foreground">Atendimento comercial</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">E-mail</h3>
                    <p className="text-muted-foreground">aokicompanybrasil@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Orçamentos e informações</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Endereço</h3>
                    <p className="text-muted-foreground">Araçatuba, SP</p>
                    <p className="text-sm text-muted-foreground">Matriz e desenvolvimento</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-sm text-muted-foreground">Suporte técnico 24/7</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Benefits */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-lg mb-4 text-primary">Por que escolher nosso robô?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Garantia de 2 anos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Suporte técnico especializado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Instalação Fácil</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Mais segurança para sua obra</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;